import React, { ComponentType, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { useUnit } from 'effector-react'
import { tutorialModel } from '@entities/tutorial'
import { TutorialId } from '@entities/tutorial/lib/tutorials'
import styled from 'styled-components'
import { Title } from '@shared/ui/title'

interface WrapperProps {
    desiredId: TutorialId
    desiredStep: number
}

export type TutorialComponent = {
    forwardedRef?: (node: HTMLDivElement | null) => void
}

export const withWrapper = <P,>(WrappedComponent: ComponentType<P & TutorialComponent>) => {
    const Wrapper: React.FC<P & WrapperProps> = (props) => {
        const portal = document.getElementById('portal')
        const root = document.getElementById('root')

        const { desiredId, desiredStep } = props
        const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 })
        const [position, setPosition] = useState<{ top: number; left: number } | null>(null)

        const handleRef = useCallback((node: HTMLDivElement | null) => {
            if (!node || !root) return
            const measureDOMNode = () => {
                const rect = node.getBoundingClientRect()
                setDimensions({ width: rect.width, height: rect.height })
                setPosition({ top: rect.top, left: rect.left })
            }
            measureDOMNode()

            const mutationObserver = new MutationObserver(measureDOMNode)
            mutationObserver.observe(root, { childList: true, subtree: true })
            window.addEventListener('resize', measureDOMNode)
            window.addEventListener('scroll', measureDOMNode, true)
        }, [])
        const [tutorialState, currentModule, currentStep] = useUnit([
            tutorialModel.stores.tutorialState,
            tutorialModel.stores.currentModule,
            tutorialModel.stores.currentStep,
        ])

        if (!portal || !position || !tutorialState || !currentModule)
            return <WrappedComponent forwardedRef={handleRef} {...props} />

        const { title, description } = currentModule.steps[currentStep]

        return (
            <>
                <WrappedComponent forwardedRef={handleRef} {...props} />
                {desiredStep === currentStep &&
                    desiredId === currentModule.id &&
                    ReactDOM.createPortal(
                        <Layout
                            $width={dimensions.width}
                            $height={dimensions.height}
                            $top={position.top}
                            $left={position.left}
                        >
                            <Hint
                                $width={dimensions.width}
                                $height={dimensions.height}
                                $top={position.top}
                                $left={position.left}
                            >
                                <Title size={4} align="left">
                                    {title}
                                </Title>
                                <Description>{description}</Description>
                            </Hint>
                        </Layout>,
                        portal,
                    )}
            </>
        )
    }

    return Wrapper
}

const Layout = styled.div<{ $width: number; $height: number; $top: number; $left: number }>`
    position: fixed;
    width: ${({ $width }) => $width + 20}px;
    height: ${({ $height }) => $height + 20}px;
    top: ${({ $top }) => $top - 10}px;
    left: ${({ $left }) => $left - 10}px;
    padding: 10px;
    z-index: 5000;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 10000px;
`

const Hint = styled.div<{ $width: number; $height: number; $top: number; $left: number }>`
    background: linear-gradient(0deg, rgba(95, 109, 236, 0.6), rgba(95, 109, 236, 0.6)), rgba(35, 35, 36, 0.7);
    backdrop-filter: blur(6.5px);
    border-radius: 15px;
    z-index: 5001;
    position: fixed;
    padding: 20px 30px;
    top: ${({ $top }) => $top - 10}px;
    left: ${({ $left, $width }) => $left + $width + 20}px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    color: #f4f4f4;
    font-size: 16px;
    line-height: 20px;
`

const Description = styled.div`
    font-size: 12px;
    line-height: 140%;
`
