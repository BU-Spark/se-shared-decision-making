export interface home_data {
    Section: section_data
}

export interface section_data {
    data: {
        attributes: {
            Hero_Title: string,
            Hero_Description: string,
            Hero_Image:image_data
        }
    }
}


export interface image_data {
    data: image_attribute
}


export interface home_choice_section {
    Title: string,
    data: {
        attributes: {
            Fact_Card_Content: home_choice_card[]
        }
    }
}

export interface home_choice_attributes {
    Title: String,
    Home_Choice_Card: home_choice_card[]
}

export interface home_choice_card {
    card_title: string,
    card_subtext: string,
    card_link: string,
    Fact_Point: home_choice_card_fact[]
}

export interface home_choice_card_fact {
    fact_body: string,
    fact_icon: image_data,
}


export interface image_attribute {
    attributes: image_url
}

export interface image_url {
    url: string
}



// Below are the types for main article pages

export interface article {
    article_title: string,
    feature_image: image_data,
    locale: string,
    Article_Section: Article_Section[]
}


export interface Article_Section {
    article_section_title: string,
    article_dropdown_section_data: article_section_data
}

export interface article_section_data {
    data: article_section_data_attributes[]
}

export interface article_section_data_attributes {
    attributes: article_section_data_attributes_dropdown
}

export interface article_section_data_attributes_dropdown {
    dropdown_section_title: string,
    dropdown_section_description: string,
    article_section_image: image_data,
    risk_and_benefits: risk_and_benefits[]
}

export interface risk_and_benefits {
    risk_and_benefits_text: string,
    risk_and_benefits_image: risk_and_benefits_image
}

export interface risk_and_benefits_image {
    data: risk_and_benefits_image_data
}

export interface risk_and_benefits_image_data {
    attributes: {
        url: string
    }
}


//-------------------------------- Informative section of the home page data

export interface home_info_section {
    Information_Short_Title: string,
    Information_Full_Title: string,
    Information_Caution_Text: string,
    Information_Answer: string,
    Information_Description: string,
    Information_Stat_Number: string,
    Information_Additional_Info: string
}