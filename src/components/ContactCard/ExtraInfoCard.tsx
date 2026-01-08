import "./ExtraInfoCard.css";


const ExtraInfoCard = () => {

    return (
        <div className="extra-Card">

            <h3 className="extra-card-title">📖 ¿Como puedo agendar una cita?</h3>
            <p className="extra-card-description">
                1. Puedes escribir un correo con el formulario de la web o mensajería directa al siguiente link (solo WhatsApp):   
          <a href="https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita.">
               Agenda tu cita aquí.
          </a>
          <br />
          2. Se te proporcionará toda la información relacionada con horarios,
          tarifas y políticas para la realización de las sesiones.
          <br />
          3. Una vez agendada tu cita, es importante que seas puntual y asistas
          el día y hora pautada.
          <br />
          <br />
          <strong>⚠️ Importante tener en cuenta:</strong>
          <br />
           <br />
          - Solo se atiende con cita previa.
          <br />
          - El horario de atención es de lunes a viernes de 8 a.m. a 6 p.m. Hora
          Venezuela (GMT-4)
          <br />
          - En caso de necesitar posponer tu cita, deberás hacerlo con 24 horas
          de anticipación.
          <br />
          - Se agradece que antes de iniciar la consulta, se envie una prueba de pago con sus datos personales.
                    <br />
          - Ante cualquier duda o inquietud sobre el proceso, consulta
          directamente conmigo a través del mismo medio.
          </p>
        </div>
    )
};

export default ExtraInfoCard;