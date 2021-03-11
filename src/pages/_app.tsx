import '../styles/global.css'

import { ChallangeProvaider } from '../contexts/ChallangesContext'

function MyApp({ Component, pageProps }) {

  return (
    <ChallangeProvaider> 
      <Component {...pageProps} /> {/* toda vez que temos um componente que esse componente recebe conteudo dentro dele esse componente receber um 'Children' */}
    </ChallangeProvaider>
  )
}

export default MyApp
