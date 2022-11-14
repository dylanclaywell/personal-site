import React from 'react'

interface Props {
  id: string
  title: string
  paragraphs: string[]
  imageUrl: string
}

export default function Feature({ id, title, paragraphs, imageUrl }: Props) {
  return (
    <section
      id={id}
      className="flex flex-col md:flex-row p-4 space-y-2 md:space-y-0 md:space-x-2"
    >
      <div className="space-y-4 basis-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="basis-1/2 font-[Poppins]">
            {paragraph}
          </p>
        ))}
      </div>
      <img
        className="basis-1/2 w-full md:w-1/2 object-contain"
        src={imageUrl}
      />
    </section>
  )
}
