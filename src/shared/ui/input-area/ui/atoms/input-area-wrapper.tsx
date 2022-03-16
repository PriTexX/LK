import styled from 'styled-components'

interface Args {
    openArea: boolean
    amount: number
    withLoadDoc: boolean
    hint: number
    addNew: boolean
    optionalCheckbox: boolean
}

const InputAreaWrapper = styled.div<Args>`
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({ openArea }) => (openArea ? '15px' : '0')};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({ openArea }) => (openArea ? 'auto' : '0')};
        opacity: ${({ openArea }) => (openArea ? '1' : '0')};
        visibility: ${({ openArea }) => (openArea ? 'visible' : 'hidden')};
        .buttons {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .data-line {
            display: flex;
            align-items: flex-end;
            column-gap: 5px;
        }
    }

    /* @media (max-width: 600px) {
		 .inputs {
			  .data-line {
					display: flex;
					row-gap: 5px;
					column-gap: 5px;
					flex-direction: column;
			  }
		 }
	} */
`

export default InputAreaWrapper
