import { Button } from '@nextui-org/button'

export default function Page(): React.ReactElement {
  // variables

  // functions

  // returns
  return (
    <div className="p-8 flex gap-2 items-center">
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button color="default">Default</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
    </div>
  )
}
