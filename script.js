document.addEventListener('DOMContentLoaded', () => {
    const pasteis = [
        'Pastel de Carne',
        'Pastel de Carne com Queijo',
        'Pastel de Frango com Queijo',
        'Pastel de Frango com Catupiry',
        'Pastel de Calabresa com Queijo',
        'Pastel de Bacon com Queijo',
        'Pastel de Presunto e Queijo'
    ];

    const pasteisEsp = [
        'PIZZA (Queijo, presunto, orégano e azeitona)',
        'BAURU (Queijo, presunto, tomate, orégano)',
        'ESPECIAL DA CASA (Calabresa, catupiry, alho frito e manjericão)',
        'ESPECIAL DA CASA 2 (Calabresa, catupiry, milho e orégano)',
        'ESPECIAL DA CASA 3 (Frango, palmito e catupiry)',
        'ESPECIAL DA CASA 4 (Frango, queijo e bacon)',
        'COWBOY CARNE (Carne, bacon e cheddar)',
        'COWBOY FRANGO (Frango, bacon e cheddar)',
        'CAPIXABA (Carne, ovo e azeitona)',
        'CAPIXABA 2 (Carne, ovo e azeitona e catupiry)',
        'CAPIXABA 3 (Carne, ovo e azeitona e cheddar)',
        'CAPIXABA 4 (Carne, ovo e azeitona e queijo)',
        'MODINHA (Toscana, vinagrete e milho)'
    ];

    const pasteisGula = [
        'CAIPIRA (Frango, catupiry, milho e ovo)',
        'CAIPIRA 2 (Frango, queijo, milho, tomate, ovo e orégano)',
        'VEGETARIANO (Palmito, queijo, milho, azeitona e orégano)',
        'PORTUGUESA (Presunto, queijo, ovo, tomate e azeitona)',
        'A MODA CARNE (Carne, bacon, queijo, calabresa, milho e azeitona)',
        'A MODA FRANGO (Frango, bacon, queijo, calabresa, milho e azeitona)',
    ];

    const refrigerantes = [
        'Juninho Sabores', 
        'Juninho Coca-Cola',
        'Lata Sabores',
        'Guaraná 1,5L',
        'Coca-Cola 1,5L',
    ];

    const createListItem = (item, listId) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item;
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.value = 1;
        quantityInput.style.marginLeft = '10px';
        quantityInput.style.width = '50px';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(item));
        li.appendChild(quantityInput);
        document.getElementById(listId).appendChild(li);
    };

    pasteis.forEach(pastel => createListItem(pastel, 'pasteis'));
    pasteisEsp.forEach(pastelEsp => createListItem(pastelEsp, 'pasteisEsp'));
    pasteisGula.forEach(pastelGula => createListItem(pastelGula, 'pasteisGula'));
    refrigerantes.forEach(refrigerante => createListItem(refrigerante, 'refrigerantes'));

    const whatsappLink = document.getElementById('whatsapp-link');
    const whatsappNumber = 5527988039857; // Substitua pelo seu número do WhatsApp

    whatsappLink.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedItems = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const quantity = checkbox.nextElementSibling.value;
            selectedItems.push(`${checkbox.value} - Quantidade: ${quantity}`);
        });

        if (selectedItems.length > 0) {
            const whatsappMessage = `Olá, gostaria de fazer um pedido:\n${selectedItems.join('\n')}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
        } else {
            alert("Por favor, selecione ao menos um item para fazer o pedido.");
        }
    });
});
