type HeaderShowProps = {
  titre: string, children: React.ReactNode
}

const HeaderShow = (props: HeaderShowProps) => {
  return <header>
    <h2 className="show-section-title">{props.titre}</h2>
    {props.children}
  </header>
}

export default HeaderShow