function Header({peop, bgColor, textColor}) {
    const headerStyles ={
        backgroundColor: bgColor,
        color:textColor,
    }
  return (
    <header style={headerStyles}>
        <div >
            <h2>{peop}</h2>
        </div>
    </header>
  )
}


export default Header