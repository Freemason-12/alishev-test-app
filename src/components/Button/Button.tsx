
import { FC } from "react"
export const Button: FC<{ text: string, fancy?: boolean }> = ({ text, fancy }) => {
  return <button
    className={`
      ${fancy ? 'fancy-border-gradient border-transparent' : ''}
      hover:cursor-pointer
      border-2
      px-8 py-5
      border-2
      rounded-[4rem]
      text-xl
      font-space-grotesk
    `}
  >
    {text}
  </button>
}
