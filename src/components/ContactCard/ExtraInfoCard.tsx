import "./ExtraInfoCard.css";


const ExtraInfoCard = () => {

    return (
        <div className="extra-Card">
            <h3 className="extra-card-title">📖 ¿Cómo puedo agendar una cita?</h3>

            <div className="extra-card-description">
                <ol className="extra-card-steps">
                    <li>
                        Puedes escribir un correo con el formulario de la web o enviar un
                        mensaje directo al siguiente enlace (solo WhatsApp):{" "}
                        <a href="https://wa.me/584241821096?text=Hola%2C%20quisiera%20agendar%20una%20cita.">
                            Agenda tu cita aquí.
                        </a>
                    </li>
                    <li>
                        Se te proporcionará toda la información relacionada con horarios,
                        tarifas y políticas para la realización de las sesiones.
                    </li>
                    <li>
                        Una vez agendada tu cita, es importante que seas puntual y asistas
                        el día y la hora pautados.
                    </li>
                </ol>

                <p className="extra-card-note-title">
                    <strong>⚠️ Importante tener en cuenta:</strong>
                </p>

                <ul className="extra-card-notes">
                    <li>Solo se atiende con cita previa.</li>
                    <li>
                        El horario de atención es de lunes a viernes, de 8 a.m. a 6 p.m.,
                        hora de Venezuela (GMT-4).
                    </li>
                    <li>
                        En caso de necesitar posponer tu cita, deberás hacerlo con 24 horas
                        de anticipación.
                    </li>
                    <li>
                        Se agradece que, antes de iniciar la consulta, se envíe una prueba
                        de pago con tus datos personales.
                    </li>
                    <li>
                        Ante cualquier duda o inquietud sobre el proceso, consulta
                        directamente conmigo a través del mismo medio.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ExtraInfoCard;