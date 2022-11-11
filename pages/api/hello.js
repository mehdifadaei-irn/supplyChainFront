// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
  {
    id: 1,
    title: 'hello'
  },
  {
    title: 'MMD'
  }
]

export default function handler(req, res) {
  res.status(200).json(data)
}
