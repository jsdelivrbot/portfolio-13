const INITIAL_STATE = {
    projects: [{
        id: 101,
        slug: "cerveja-franziskaner-kristall-klar",
        title: "Cerveja Franziskaner Kristall Klar 500ml",
        meta_keywords: "cerveja, franziskaner, kristall, ale, german, kristallweizen",
        meta_description: "Cerveja Franziskaner Hefe-Weissbier Hell - 500ml do país Alemanha com 5,2% de álcool, produzida pela Cervejaria Spaten-Franziskaner-Bräu.",
        description: "<p>A Cerveja Franziskaner Kristall Klar 500ml passa por uma filtragem especial, que elimina a base de fermento da garrafa e possui o mais alto grau de carbonatação dentre os produtos da cervejaria Franziskaner. Esse resultado, produz uma cerveja de trigo com cor cristalina de sabor leve, refrescante e aroma levemente frutado.</p>",
        folder_files: "cerveja-franziskaner-kristall-klar",
        highlight: 1,
        cover: "profile.jpg",
        link: "",
        order_display: 1,
        section_id: 1,
        status: 1,
        data_insert: "2018-01-17T22:29:23.000Z",
        category: "Web Design",
        gallery: "cupom.png,erro-envio-dados.png,gato.jpg,imagens-lobos.jpg,leao.jpg,no-profile.jpg"
    }]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PROJECTS_FETCHED':
            return {...state, projects: action.payload.data };
        default:
            return state;
    }
};