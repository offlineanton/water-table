import { DEFAULT_PAGE_AMOUNT } from "@/hooks/useGetRiverSensorData";
import { Button } from "./ui/button";

interface RiverSensorPaginationProps {
    page: number;
    handleChangePage: (page: number) => void;
    total: number;
}

const RiverSensorPagination = ({
    page,
    handleChangePage,
    total
}: RiverSensorPaginationProps) => {
    return (
        <>
            <div className={page === 1 ? `flex justify-end` : `flex justify-between`}>
                {page !== 1 &&
                    <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleChangePage(page - 1)}
                    >
                        Previous page
                    </Button>
                }

                <Button 
                    variant="link"
                    size="sm"
                        onClick={() => handleChangePage(page + 1)}
                >
                    Next page
                </Button>
            </div>
            <div className="text-center">
                {page} of {Math.ceil(total / DEFAULT_PAGE_AMOUNT)}
            </div>
        </>
    )
}

export default RiverSensorPagination;