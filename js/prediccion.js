document.getElementById('analyzeBtn').addEventListener('click', function() {
    const simulatedScore = Math.random();
    const isRecommended = simulatedScore > 0.5;
    
    let recommendation, details;
    if (isRecommended) {
        recommendation = '👍 Se recomienda sembrar';
        details = 'Las condiciones son favorables para el cultivo, con buena calidad de suelo y clima adecuado. La probabilidad de una cosecha exitosa es alta. Sin embargo, recuerde mantener buenas prácticas agrícolas y estar atento a las condiciones climáticas cambiantes.';
    } else {
        recommendation = '👎 No se recomienda sembrar';
        details = 'Las condiciones actuales podrían no ser óptimas para el cultivo. Esto puede deberse a factores como baja calidad del suelo, condiciones climáticas desfavorables o riesgos ambientales. Considere esperar a que mejoren las condiciones o consultar con un experto local para obtener más detalles.';
    }
    
    document.getElementById('recommendation').textContent = recommendation;
    document.getElementById('details').textContent = details;
    document.getElementById('results').classList.remove('hidden');
    
    // document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
});
