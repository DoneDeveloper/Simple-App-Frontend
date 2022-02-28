export class warehouseResponse{
        _id !: string
        name !: string
        location !: location
        cars !: cars
}

export class location
{
    lat !: string
    long !: string
}

export class cars
{
    location !: string
    vehicles !: car[]
}

export class car
{
    _id !: number
    make !: string
    model !: string
    year_model !: number
    price !: number
    licensed !: boolean
    date_added !: string
}