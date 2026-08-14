const PrescriptionTable = (medicines = []) => {

    return `

<div class="card">

    <div class="card-title">

        PRESCRIPTION

    </div>

    <div class="card-body">

        <table style="width:100%;
                      border-collapse:collapse;">

            <thead>

                <tr
                    style="
                    background:#F4F7FC;
                    ">

                    <th style="padding:10px;border:1px solid #DDD;">
                        Medicine
                    </th>

                    <th style="padding:10px;border:1px solid #DDD;">
                        Dose
                    </th>

                    <th style="padding:10px;border:1px solid #DDD;">
                        Frequency
                    </th>

                </tr>

            </thead>

            <tbody>

                ${
                    medicines.length
                    ?

                    medicines.map((medicine)=>`

                        <tr>

                            <td style="padding:10px;border:1px solid #DDD;">

                                ${medicine.name}

                            </td>

                            <td style="padding:10px;border:1px solid #DDD;">

                                ${medicine.dosage || "-"}

                            </td>

                            <td style="padding:10px;border:1px solid #DDD;">

                                ${medicine.frequency || "-"}

                            </td>

                        </tr>

                    `).join("")

                    :

                    `<tr>

                        <td colspan="3"
                        style="padding:20px;text-align:center;">

                            No medicines prescribed

                        </td>

                    </tr>`
                }

            </tbody>

        </table>

    </div>

</div>

`;

};

module.exports = PrescriptionTable;