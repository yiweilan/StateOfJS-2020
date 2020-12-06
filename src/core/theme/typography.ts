import { css } from 'styled-components'

export const primaryFontMixin = css`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
`

export const secondaryFontMixin = css`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
`
