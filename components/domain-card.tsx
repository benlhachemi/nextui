'use client'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';

import {
  ShoppingCart, Save2,
} from 'iconsax-react'

interface Props {
  domainName: string;
}

export default function DomainCard({ domainName }: Props) {
  return (
    <Card>
      <CardHeader>
        <Button isIconOnly endContent={<Save2 variant="Bulk" />} />
      </CardHeader>
      <CardBody className="h-32 flex items-center justify-center font-bold text-4xl">{domainName}</CardBody>
      <CardFooter>
        <Button
          color="secondary"
          size="md"
          fullWidth
          endContent={<ShoppingCart variant="Bulk" />}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
