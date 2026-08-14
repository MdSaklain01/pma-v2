const BottomSection = (appointment = {}) => {

    return `

<div
style="
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:18px;
margin-top:18px;
">

<div class="card">

<div class="card-title">

Advice

</div>

<div class="card-body">

<div style="min-height:120px;" class="card-text">

${appointment.advice? appointment.advice
    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0)
                    .join('<br>')
                : "No advice provided"
}

</div>

</div>

</div>

<div class="card">

<div class="card-title">

Investigations

</div>

<div class="card-body">

<div style="min-height:120px;" class="card-text">

${appointment.investigations? appointment.investigations
    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0)
                    .join('<br>')
                : "No investigations required"
}

</div>

</div>

</div>

<div class="card">

<div class="card-title">

Follow-up

</div>

<div class="card-body">

<p class="card-text">

<strong>Date :</strong>

${
appointment.followUpDate
?

new Date(appointment.followUpDate).toLocaleDateString("en-IN")

:

"-"

}

</p>

</div>

</div>

</div>

`;

};

module.exports = BottomSection;