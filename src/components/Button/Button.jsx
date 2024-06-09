import   "./Button.css"

const Button = ({children, style, handleClick, type='button'}) => {
    console.log('style',style)
  return (
    <button
    type={type}
    className={style}
    onClick={handleClick}
    >
        {children}
    </button>
  )
}

export default Button