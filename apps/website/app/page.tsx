import { getRepositoryStars } from './github'
import { HomeExperience } from './home.client'

export default async function Page() {
  const stars = await getRepositoryStars()
  return <HomeExperience stars={stars} />
}
