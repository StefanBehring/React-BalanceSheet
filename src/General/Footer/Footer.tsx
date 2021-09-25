import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <AppFooter>
      <a
        href="https://github.com/StefanBehring/React-Privatbilanz"
        target="_blank"
        rel="noreferrer"
      >
        A github project
      </a>
      <p>by: Stefan Behring</p>
    </AppFooter>
  )
}

const AppFooter = styled.footer`
  text-align: center;
`

export default Footer
