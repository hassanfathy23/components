

import Layout from "../components/Layout"
import Signup from "../components/Signin"
import Button from "../components/Button"
import ButtonsList from "../components/ButtonsList"

export default function Home() {
  return (
    <Layout>
      <Signup />
      <ButtonsList>
      <Button title="Default" />
      <Button title="Outline" variant="outline" />
      <Button title="disabled" disabled />
      <Button title="large" size="lg" />
      <Button title="lg primary with icon" size='lg'  color='primary' startIcon="ic:round-add-shopping-cart" />
      <Button title="md red with icon at the end" size='md'  color='danger' endIcon="ic:round-add-shopping-cart" />
      <Button title="md secondry color with icon" size='md'  color='secondry' startIcon="ic:round-add-shopping-cart" />
      <Button title="md outline blue with icon" size='md' variant='outline'  color='primary' startIcon="ic:round-add-shopping-cart" />
      <Button title="md text sec color with icon" size='md' variant='text'  color='secondry' startIcon="ic:round-add-shopping-cart" />
      </ButtonsList>
    </Layout>
  )
}
