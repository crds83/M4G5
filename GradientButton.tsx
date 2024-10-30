import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

interface ButtonProps {
  label?: string;
  gradientFrom?: string;
  gradientTo?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'gradient' | 'outline' | 'glass' | 'icon' | 'animated';
  icon?: React.ReactNode;
}

const sizeStyles = {
  small: css`
    padding: 8px 12px;
    font-size: 0.8rem;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 1rem;
  `,
  large: css`
    padding: 12px 28px;
    font-size: 1.2rem;
  `,
};

const gradientStyle = css<ButtonProps>`
  background: linear-gradient(45deg, ${(props) => props.gradientFrom}, ${(props) => props.gradientTo});
  color: white;
  border: none;
`;//Gradiant Button style adds a visually striking look with a customizable gradient background, ideal for
//primary actions like "submit" or start. Styled with linear gradients for eye catching effects. 

const outlineStyle = css`
  background: transparent;
  color: #4f46e5;
  border: 2px solid #4f46e5;
  &:hover {
    background: #4f46e5;
    color: white;
  }
`;
//Outline style provides a sleek, minimal look with only a border and text color. 
//Suitable for secondary actions or where a suble appearance is required. On hover, the background fills in, and the 
//text color switches to white.

const glassStyle = css`
  background: rgba(255, 255, 255, 0.2);
  color: #333;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;
//Glass Button gives a translucent "frosted glass" look, using partial transparency and a blur effect.
// Perfect for modern UIs or overlay button on images.

const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
`;
//Displays an icon with or without a label, providing a compact and focused action button.
//Useful for icon-only buttons like "Like" or "Bookmark"

const pulseAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;
//Draws attention by pulsing to invite user interaction. Ideal for highlighting important actions
//such as "New Feature"
//Pulse animation uses keyframes to slightly enlarge and shrink the button continuously.

const animatedStyle = css`
  animation: ${pulseAnimation} 1s infinite;
`;

const Button = styled.button<ButtonProps>`
  ${(props) => props.size && sizeStyles[props.size]};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  ${(props) =>
    props.variant === 'gradient' ? gradientStyle :
    props.variant === 'outline' ? outlineStyle :
    props.variant === 'glass' ? glassStyle :
    props.variant === 'icon' ? iconStyle :
    props.variant === 'animated' && animatedStyle};

  &:hover {
    transform: scale(1.05);
  }
`;

const GradientButton: React.FC<ButtonProps> = ({ label, icon, ...props }) => (
  <Button {...props}>
    {icon && <span style={{ marginRight: label ? '8px' : '0' }}>{icon}</span>}
    {label}
  </Button>
);

export default GradientButton;
