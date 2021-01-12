import React from 'react'
import styled from 'styled-components'
import { ToolsCardinalityByUserBucket } from 'core/survey_api/tools'
// @ts-ignore
import { spacing, mq } from 'core/theme'
import { SectionItem } from './SectionItem'

export const AllSectionsToolsCardinalityByUserChart = ({
    data,
    units,
}: {
    data: {
        sectionId: string
        data: ToolsCardinalityByUserBucket[]
    }[]
    units: 'percentage' | 'count'
}) => (
    <GridContainer>
        {data.map((section) => (
            <SectionItem
                key={section.sectionId}
                sectionId={section.sectionId}
                data={section.data}
                units={units}
            />
        ))}
    </GridContainer>
)

const GridContainer = styled.div`
    display: grid;
    column-gap: ${spacing(1)};

    @media ${mq.small} {
        grid-template-columns: repeat(2, minmax(120px, 1fr));
        row-gap: ${spacing(1)};
    }

    @media ${mq.mediumLarge} {
        grid-template-columns: repeat(3, minmax(120px, 1fr));
        row-gap: ${spacing(1)};
    }

    @media ${mq.large} {
        grid-template-columns: repeat(4, minmax(120px, 1fr));
        row-gap: ${spacing(1.5)};
        column-gap: ${spacing(1)};
    }
`
