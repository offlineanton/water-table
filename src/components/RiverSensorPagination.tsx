import { Button } from "./ui/button";

interface RiverSensorPaginationProps {
    page: number;
    handleChangePage: (page: number) => void;
}

const RiverSensorPagination = ({
    page,
    handleChangePage
}: RiverSensorPaginationProps) => {
    return (
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
    )
}

export default RiverSensorPagination;