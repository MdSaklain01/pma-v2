const styles = `
<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    height:100%;
}
html,
body{
    font-family:Arial,Helvetica,sans-serif;
    padding:0;
    margin:0;
    background:white;
    font-size:13px;
}

.page{
    min-height:290mm;
    display:flex;
    flex-direction:column;
}

.content{
    flex:1;
}

/* ---------------- HEADER ---------------- */

.header{
    display:flex;
    justify-content:space-between;
    // align-items:flex-start;
    // align-items:center;
    border-bottom:3px solid;
    border-image: linear-gradient(to right, #FF0000 33.33%, #0B4EA2 33.33%) 1;
    padding-bottom:8px;
    margin-bottom:10px;

}

.logo-container{
    padding-top:5px;
}

.logo-container img{
    width:220px;
} 

.logo-container .para{
    font-size:14px;
    color:#555;
    font-weight:600;
    margin-top:4px;
    line-height:1.4;
}
.logo-container .contact-details{
    margin-top:4px;
    font-size:12px;
    line-height:1.4;
    color: #444;
}

.clinic-details{
    flex:1;
    padding-left:20px;
}

.clinic-name{
    font-size:28px;
    font-weight:bold;
    color:#0B4EA2;
}

.tagline{
    color:#555;
    margin-top:5px;
}

.doctor-section{
    flex:1;
    padding-left:22px;
}

.doctor{
    margin-top:12px;
    font-size:20px;
    font-weight:bold;
}

.doctor-name{
    font-size:30px;
    font-weight:700;
    color:#0B4EA2;
    margin-bottom:5px;
}

.doctor-heading{
    display:flex;
    align-items:flex-start;
    gap:10px;
}

.qualification-column{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin-top:4px;
}

.qualification{
    color:#D32F2F;
    font-size:12px;
    font-weight:700;
    line-height:1.05;
    white-space:nowrap;
}

.achievement-list{
    display:flex;
    flex-direction:column;
    // gap:5px;
}

.achievement{
    font-size:12px;
    color:#444;
    line-height:1.2;
}

.consultant-block{
    margin-top:10px;
}

.consultant-title{
    color:#0B4EA2;
    font-weight:700;
    font-size:16px;
    margin-bottom:2px;
    border-bottom: 1px solid #0B4EA2;
    display: inline-block;
}

.consultant-name{
    font-size:20px;
    color:#0B4EA2;
    font-weight:700;
    margin-bottom:5px;
}

.contact{
    margin-top:10px;
    font-size:12px;
    line-height:1.6;
}

/* -------- Patient Information -------- */

.patient-bar{
    display:grid;
    grid-template-columns:2fr 1fr 1fr 1fr 1fr;
    border:1px solid #DDD;
    margin-top:15px;
    margin-bottom:20px;
}

.patient-item{
    padding:7px;
    border-right:1px solid #DDD;
}

.patient-item:last-child{
    border-right:none;
}

.label{
    color:#666;
    font-size:11px;
}

.value{
    margin-top:4px;
    font-weight:bold;
}

/* ---------- Main Section ---------- */

.main{
    display:grid;
    grid-template-columns:28% 72%;
    // grid-template-columns:30% 70%;
    gap:18px;
}

/* -------- Cards -------- */

.card{
    border:1px solid #DDD;
    border-radius:6px;
    margin-bottom:10px;
    overflow:hidden;
}

.card-title{
    color:#0B4EA2;
    padding:7px;
    font-size:15px;
    font-weight:bold;
}

.card-body{
    padding:8px;
}
.card-text{
    margin: 0;
    padding: 0;
    text-align: left;    
}

/* -------- Footer -------- */

.footer {
    width: 100%;
    box-sizing: border-box;

    background: #0B4EA2;
    color: #FFFFFF;

    padding: 6px 10px;

    font-size: 10px;
    line-height: 1.35;

    margin-top: 10px;

    flex-shrink: 0;
}

.footer-content {
    width: 100%;
}

.branches-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.branch {
    color: #FFFFFF;
    font-size: 10px;
    line-height: 1.35;

    margin: 0;
    padding: 0;
}

/* ------------ google icons ------------- */

.material-symbols-outlined {
    font-family: 'Material Symbols Outlined';

    font-weight: normal;
    font-style: normal;

    font-size: 22px;

    line-height: 1;

    letter-spacing: normal;
    text-transform: none;

    display: inline-block;

    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;

    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;

    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
}

</style>
`;

module.exports = styles;