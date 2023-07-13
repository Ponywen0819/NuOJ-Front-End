import { Loading  } from "@/components/loading"

export const TableLoading = ({len})=>{
    return(
        <div className="w-full h-48 bg-white rounded-lg">
            <Loading></Loading>
        </div>
    )
}

