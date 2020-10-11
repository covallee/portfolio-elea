export default {
  name: 'photoReference',
  type: 'object',
  title: 'Photo reference',
  fields: [
    {
      type: 'reference',
      name: 'photography',
      to: [
        {
          type: 'photography'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'photography.title',
      media: 'photography.poster.asset'
    }
  }
}