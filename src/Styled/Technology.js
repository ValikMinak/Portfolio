import React from "react";
import styled from "styled-components"


const StyledTechnology=styled.fragment`

`


export const Technology=({ color,technology })=>{
    return(
        <StyledTechnology>
            {technology}
        </StyledTechnology>
    )
}
