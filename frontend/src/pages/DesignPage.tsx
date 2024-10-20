import Breadcrumb from "../module/breadcrumb/Breadcrumb"
import { CakeTable } from "../module/cake/CakeTable"
type Props = {}
export default function DesignPage({}: Props) {
  return (
    <div>
      <Breadcrumb />
      <CakeTable />
    </div>
  )
}