

import Layout from "../components/Layout"
import Signup from "../components/Signin"
import Button from "../components/Button"

export default function Home() {
  return (
    <Layout>
      <Signup />
      <Button title="Default" disabled /*endIcon="ic:outline-add-shopping-cart"*/ variant="text" /*disableShadow*/ />
    </Layout>
  )
}
