import { styled } from "../styles";
import Link from "next/link";

export const Crumb = styled(Link, {
  color: '$neutral600',
  textDecoration: 'none',
  fontSize: '$body2',
  lineHeight: '$body2',

  '&:hover': {
    color: '$black',
  },

  variants: {
    active: {
      true: {
        color: '$black',
        fontWeight: '$bold',
      },
    },
  },
});
