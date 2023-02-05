import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
};


const SButton = styled.button` 
    border:'0';
    padding:'6px 16px';
    `;

export const Button:React.FunctionComponent<ButtonProps> =(props)=>{
    const {children} = props;
    return (
        <SButton>
            {children}
        </SButton>
    );
}

export default Button;