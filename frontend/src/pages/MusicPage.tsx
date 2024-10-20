import Breadcrumb from '../module/breadcrumb/Breadcrumb'
import { MusicTable } from '../module/music/musicTable'
type Props = {}

export default function MusicPage({}: Props) {
  return (
    <div>
        <Breadcrumb />
        <MusicTable />
    </div>
  )
}