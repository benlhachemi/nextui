'use client'

import { Input, Button, CircularProgress } from '@nextui-org/react';
import { SearchNormal1, Magicpen } from 'iconsax-react'
import DomainCard from '@/components/domain-card';
import { useState } from 'react';
import axios from 'axios';

export default function Page(): React.ReactElement {
  // variables
  const [search, setSearch] = useState<string>('');
  const [domains, setDomains] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // functions
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const { data } = await axios<string[]>({
      method: 'POST',
      url: '/api/generate',
      data: {
        input: search,
      },
    })
    setDomains(data)
    setIsLoading(false)
  }

  // returns
  return (
    <div className="flex flex-col justify-center gap-4">

      {/* HEADER BOX */}
      <div className="light w-full h-60 bg-primary shadow-small flex flex-col pattern justify-center items-start gap-8 px-8 pattern">
        <h1 className="text-4xl font-semibold text-gray-50">Let&apos;s find the better name for your business!</h1>
        <form onSubmit={handleSubmit} className="flex gap-4 items-center w-full">
          <Input
            size="lg"
            type="text"
            placeholder="Describe your idea in a few words..."
            className="w-[500px]"
            color="primary"
            disabled={isLoading}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            isRequired
            startContent={<SearchNormal1 variant="Bulk" />}
          />
          <Button
            size="lg"
            isLoading={isLoading}
            className="bg-black bg-opacity-30 text-gray-50 backdrop-blur-md"
            endContent={<Magicpen variant="Bulk" />}
            type="submit"
          >
            Generate
          </Button>
        </form>
      </div>

      {!isLoading ? (
        <div className="w-full px-8 mx-auto flex flex-col gap-4">
          {(domains.length) ? (
            <div className="text-lg text-start">
              {domains.length}
              {' '}
              results found
            </div>
          ) : ''}

          <div className="grid grid-cols-4 gap-4">
            {domains.length ? domains.map((domain) => (
              <div className="col-span-1">
                <DomainCard domainName={domain} />
              </div>
            )) : ''}
          </div>
        </div>
      ) : (
        <CircularProgress size="lg" color="default" className="mx-auto" />
      )}

      <br />
    </div>
  )
}
