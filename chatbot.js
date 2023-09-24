// Variable para realizar un seguimiento de la etapa de conversación
var conversationStage = 0;

window.onload = function () {
    // Mensaje inicial del chatbot al cargar la página
    var initialMessage = document.createElement("div");
    initialMessage.className = "bot-message";
    initialMessage.innerText = "Chatbot: ¡Hola! ¿En qué puedo ayudarte?\nEscribe el número:\n1. Preguntas básicas\n2. Enviar mensaje WhatsApp\n3. Enviar Correo";

    // Agrega el mensaje inicial a la ventana de chat
    document.getElementById("chat-window").appendChild(initialMessage);

    // Desplázate hacia abajo para mostrar el mensaje inicial
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
};

function sendMessage() {
    // Obtiene el mensaje del usuario desde el input
    var userInput = document.getElementById("user-input").value;

    // Crea un nuevo elemento de mensaje para el usuario
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = "Usuario: " + userInput;

    // Agrega el mensaje del usuario a la ventana de chat
    document.getElementById("chat-window").appendChild(userMessage);

    // Borra el input del usuario
    document.getElementById("user-input").value = "";

    // Lógica para que el chatbot responda aquí
    // Puedes usar AJAX para enviar la solicitud a un servidor de chatbot o agregar respuestas predefinidas.

    // Etapa 1: El usuario selecciona la opción "1" para ver las preguntas
    if (conversationStage === 1) {
        if (userInput === "1") {
            var botResponse = document.createElement("div");
            botResponse.className = "bot-message";
            botResponse.innerText = "Chatbot: Por favor, ingresa el número de la pregunta que deseas que responda:\n1. ¿Cómo puedo calcular mis impuestos?\n2. ¿Cuáles son las principales deducciones fiscales?\n3. ¿Qué es una auditoría financiera?\n4. ¿Cómo puedo abrir una cuenta bancaria empresarial?\n5. ¿Qué es el estado de resultados?\n6. ¿Cuáles son las ventajas de establecer una sociedad de responsabilidad limitada (SRL)?\n7. ¿Cómo puedo reducir mi carga fiscal de manera legal?\n8. ¿Qué es un contrato de arrendamiento comercial y qué aspectos debe incluir?\n9. ¿Cuál es el proceso para registrar una marca comercial?\n10. ¿Qué es la contabilidad de partida doble?";

            // Cambia la etapa de la conversación para manejar la elección de pregunta
            conversationStage = 2;
        } else {
            var botResponse = document.createElement("div");
            botResponse.className = "bot-message";
            botResponse.innerText = "Chatbot: Por favor, selecciona una opción válida (1 para preguntas, 2 para WhatsApp, 3 para Correo):";
        }
    }

    // Etapa 2: El usuario selecciona una pregunta específica
    else if (conversationStage === 2) {
        // Aquí puedes agregar respuestas detalladas a cada pregunta
        var selectedQuestion = parseInt(userInput);
        switch (selectedQuestion) {
            case 1:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Para calcular tus impuestos, debes recopilar toda la información financiera relevante, incluyendo ingresos y gastos. Luego, puedes utilizar software de contabilidad o un contador para determinar la cantidad de impuestos que debes pagar.";
                break;
            case 2:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Las principales deducciones fiscales para empresas pueden incluir gastos operativos, depreciación de activos, intereses de préstamos comerciales, y contribuciones a planes de jubilación para empleados, entre otros. Es importante consultar a un profesional fiscal para obtener información específica sobre las deducciones aplicables a tu negocio.";
                break;
            case 3:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Una auditoría financiera es un proceso de revisión y verificación de los estados financieros de una empresa por parte de un auditor externo independiente. El objetivo es garantizar la precisión y la integridad de la información financiera presentada.";
                break;
            case 4:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Para abrir una cuenta bancaria empresarial, debes contactar a un banco o entidad financiera de tu elección y proporcionar documentos como la identificación de la empresa, el certificado de registro, y los documentos de los propietarios. También es importante tener la información fiscal de la empresa en orden.";
                break;
            case 5:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: El estado de resultados, también conocido como la cuenta de pérdidas y ganancias, es un informe financiero que muestra los ingresos, los gastos y las utilidades (o pérdidas) de una empresa durante un período específico, generalmente un trimestre o un año.";
                break;
            case 6:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Las ventajas de una SRL incluyen la limitación de la responsabilidad de los propietarios, la flexibilidad en la gestión, la facilidad de transferencia de acciones y la posibilidad de compartir las ganancias y pérdidas entre los propietarios.";
                break;
            case 7:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Puedes reducir tu carga fiscal de manera legal aprovechando deducciones fiscales, inversiones estratégicas, planificación fiscal adecuada y estructurando tu negocio de manera eficiente. Es importante consultar a un asesor fiscal para maximizar las oportunidades de reducción de impuestos.";
                break;
            case 8:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Un contrato de arrendamiento comercial es un acuerdo legal entre un propietario y un inquilino para alquilar un espacio comercial. Debe incluir detalles como la duración del arrendamiento, el monto del alquiler, las responsabilidades de mantenimiento y cualquier cláusula especial relacionada con el negocio.";
                break;
            case 9:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: El proceso para registrar una marca comercial implica presentar una solicitud ante la oficina de marcas y patentes de tu país. Debes proporcionar información detallada sobre la marca, su uso previsto y pagar las tarifas correspondientes. Luego, la marca se examinará y, si cumple con los requisitos, se registrará.";
                break;
            case 10:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: La contabilidad de partida doble es un sistema contable en el que cada transacción se registra al menos en dos cuentas, con igual cantidad de débitos y créditos. Este método asegura que los libros contables estén siempre en equilibrio y proporciona una imagen precisa de la situación financiera de una empresa.";
                break;
            default:
                var botResponse = document.createElement("div");
                botResponse.className = "bot-message";
                botResponse.innerText = "Chatbot: Por favor, ingresa un número de pregunta válido (1-10):";
                break;
        }
        // Restablece la etapa de conversación para futuras interacciones
        conversationStage = 1;
    }

    // Etapa inicial o cualquier otra etapa no reconocida
    else {
        if (userInput.includes("1")) {
            var botResponse = document.createElement("div");
            botResponse.className = "bot-message";
            botResponse.innerText = "Chatbot: Has seleccionado la opción 1. Para ver las preguntas, escribe '1' nuevamente.";
            conversationStage = 1; // Cambia a la etapa 1 para manejar la elección de pregunta.
        } else if (userInput.includes("2")) {
            var botResponse = document.createElement("div");
            botResponse.className = "bot-message";
            botResponse.innerText = "Chatbot: Redirigiéndote a WhatsApp";

            var phoneNumber = "+50661189357"; // Reemplaza esto con tu número de teléfono (incluido el código de país).
            var message = "Buenas, quiero hacer una reserva para una asesoría."; // Mensaje predefinido opcional.

            // Crea el enlace de WhatsApp
            var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

            // Abre el enlace en una nueva ventana o pestaña.
            window.open(whatsappLink, "_blank");
        } else if (userInput.includes("3")) {
            var botResponse = document.createElement("div");
            botResponse.className = "bot-message";
            botResponse.innerText = "Chatbot: Redirigiéndote al correo";
            window.location.href = "mailto:asesoriasgeogloremyregaikol@gmail.com?subject=Reserva Asesoría&body=Buenas\nMe gustaría hacer una reserva para una asesoría.";
        } else {
            var botResponse = document.createElement("div");
            botResponse.className = "bot-message";
            botResponse.innerText = "Chatbot: Por favor, selecciona una opción válida (1 para preguntas, 2 para WhatsApp, 3 para Correo):";
        }
    }

    // Agrega la respuesta del chatbot a la ventana de chat
    document.getElementById("chat-window").appendChild(botResponse);

    // Desplázate hacia abajo para mostrar el mensaje más reciente
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
}

