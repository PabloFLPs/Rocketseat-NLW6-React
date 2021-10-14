import {ButtonHTMLAttributes} from "react"

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps){ //"..." -> rest operator
  return (
    <button
      className={`button ${isOutlined ? "outlined" : ""}`}
      {...props} />
  )
}
