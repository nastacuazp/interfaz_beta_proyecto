document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const results = document.getElementById('results');
    const recommendation = document.getElementById('recommendation');
    const details = document.getElementById('details');
    
    const instruction = document.createElement('p');
    instruction.textContent = 'Por favor, presione el botón "Analizar el Área" para comenzar el análisis.';
    instruction.setAttribute('role', 'status');
    instruction.setAttribute('aria-live', 'polite');
    analyzeBtn.parentNode.insertBefore(instruction, analyzeBtn);

    //Crear botón"Scroll a Results"
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = 'Ver Resultados';
    scrollBtn.style.display = 'none';
    scrollBtn.setAttribute('aria-label', 'Desplazarse a los resultados del análisis');
    analyzeBtn.parentNode.insertBefore(scrollBtn, analyzeBtn.nextSibling);

    analyzeBtn.addEventListener('click', function() {
        instruction.textContent = 'Analizando el área... Por favor, espere.';
        
        // Simular delay de simulación
        setTimeout(function() {
            const simulatedScore = Math.random();
            const isRecommended = simulatedScore > 0.5;
            
            let recommendationText, detailsText;
            if (isRecommended) {
                recommendationText = '👍 Se recomienda sembrar';
                detailsText = 'Las condiciones son favorables para el cultivo, con buena calidad de suelo y clima adecuado. La probabilidad de una cosecha exitosa es alta. Sin embargo, recuerde mantener buenas prácticas agrícolas y estar atento a las condiciones climáticas cambiantes.';
            } else {
                recommendationText = '👎 No se recomienda sembrar';
                detailsText = 'Las condiciones actuales podrían no ser óptimas para el cultivo. Esto puede deberse a factores como baja calidad del suelo, condiciones climáticas desfavorables o riesgos ambientales. Considere esperar a que mejoren las condiciones o consultar con un experto local para obtener más detalles.';
            }
            
            recommendation.textContent = recommendationText;
            details.textContent = detailsText;
            results.classList.remove('hidden');
            
            // Actualizar instrucción y mostrar botón de desplazamiento
            instruction.textContent = 'Análisis completado. Puede ver los resultados a continuación o usar el botón "Ver Resultados".';
            scrollBtn.style.display = 'inline-block';
            
            // Anunciar finalización para lectores de pantalla
            const announcement = document.createElement('div');
            announcement.textContent = 'Análisis completado. Los resultados están disponibles.';
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'assertive');
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 1000);

        }, 2000); // segundos para simular el análisis
    });

    scrollBtn.addEventListener('click', function() {
        results.scrollIntoView({ behavior: 'smooth' });
    });


    // Añadir navegación por teclado para la sección de resultados
    results.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            analyzeBtn.focus();
        }
    });

    // Añadir enlace de omisión para usuarios de teclado
    const skipLink = document.createElement('a');
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Estilo para saltar el enlace
    const style = document.createElement('style');
    style.textContent = `
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: white;
            padding: 8px;
            z-index: 100;
        }
        .skip-link:focus {
            top: 0;
        }
    `;
    document.head.appendChild(style);
});