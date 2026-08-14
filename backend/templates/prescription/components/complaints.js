const Complaints = (complaints = "") => {

    return `

<div class="card">

    <div class="card-title">

        CHIEF COMPLAINTS

    </div>

    <div class="card-body">

        <div style="min-height:140px;
                    line-height:1.8;" class="card-text"> 
            ${complaints 
                ? complaints
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0)
                    .join('<br>')
                : "No chief complaints mentioned."
            }
        </div>

    </div>

</div>

`;

};

module.exports = Complaints;