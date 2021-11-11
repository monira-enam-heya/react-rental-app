import React from 'react';
import Cars from './data.json';

function CarList () {
    const DisplayCars = Cars.map(
        (info) => {
            return (
                <tr>
                    <td>{info.code}</td>
                    <td>{info.name}</td>
                    <td>{info.type}</td>
                    <td>{String(info.availability)}</td>
                    <td>{String(info.needing_repair)}</td>
                    <td>{info.durability}</td>
                    <td>{info.max_durability}</td>
                    <td>{String(info.mileage)}</td>
                    <td>{info.price}</td>
                    <td>{info.minimum_rent_period}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Availability</th>
                        <th>Needing Repair</th>
                        <th>Durability</th>
                        <th>Max Durability</th>
                        <th>Mileage</th>
                        <th>Price</th>
                        <th>Minimum Rent Period</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayCars}
                </tbody>
            </table>
        </div>
    )
}

export default CarList;