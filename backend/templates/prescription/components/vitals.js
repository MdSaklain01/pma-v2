const Vitals = (vitals = {}, allergies = "-") => {

    const rows = [
        ["BP", vitals.bp ? `${vitals.bp.systolic}/${vitals.bp.diastolic} mmHg` : "-"],
        ["Pulse", vitals.pulse ? `${vitals.pulse} bpm` : "-"],
        ["Temperature", vitals.temperature ? `${vitals.temperature} °F` : "-"],
        ["SpO₂", vitals.o2Sat ? `${vitals.o2Sat} %` : "-"],
        ["Height", vitals.height ? `${vitals.height} cm` : "-"],
        ["Weight", vitals.weight ? `${vitals.weight} kg` : "-"],
        ["BMI", vitals.bmi || "-"],
        ["Blood Sugar", vitals.sugar ? `${vitals.sugar} mg/dL` : "-"],
        ["Allergies", allergies || "-"],
    ];

    return `

<div class="card">

    <div class="card-title">

        VITALS

    </div>

    <div class="card-body">

        <table style="width:100%;border-collapse:collapse;">

            ${rows.map(row => `
                <tr>
                    <td style="padding:8px;border-bottom:1px solid #EEE;"><strong>${row[0]}</strong></td>
                    <td style="padding:8px;border-bottom:1px solid #EEE;text-align:right;">${row[1]}</td>
                </tr>
            `).join("")}

        </table>

    </div>

</div>

`;

};

module.exports = Vitals;