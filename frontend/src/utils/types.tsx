export interface home_data {
  Section: section_data;
}

export interface section_data {
  data: {
    attributes: {
      Hero_Title: string;
      Hero_Description: string;
      Hero_Image: image_data;
    };
  };
}

export interface image_data {
  data: image_attribute;
}

export interface home_choice_section {
  Title: string;
  data: {
    attributes: {
      Fact_Card_Content: home_choice_card[];
    };
  };
}

export interface home_choice_attributes {
  attributes: {
    Title: String;
  };
  Home_Choice_Card: home_choice_card[];
}

export interface home_choice_card {
  card_title: string;
  card_subtext: string;
  card_link: string;
  Fact_Point: home_choice_card_fact[];
}

export interface home_choice_card_fact {
  fact_body: string;
  fact_icon: image_data;
}

export interface image_attribute {
  attributes: image_url;
}

export interface image_url {
  url: string;
}

// Below are the types for main article pages

export interface article {
  article_title: string;
  feature_image: image_data;
  locale: string;
  Article_Section: Article_Section[];
}

export interface Article_Section {
  article_section_title: string;
  article_dropdown_section_data: article_section_data;
}

export interface article_section_data {
  data: article_section_data_attributes[];
}

export interface article_section_data_attributes {
  attributes: article_section_data_attributes_dropdown;
}

export interface article_section_data_attributes_dropdown {
  dropdown_section_title: string;
  dropdown_section_description: string;
  article_section_image: image_data;
  risk_and_benefits: risk_and_benefits[];
}

export interface risk_and_benefits {
  risk_and_benefits_text: string;
  risk_and_benefits_image: risk_and_benefits_image;
}

export interface risk_and_benefits_image {
  data: risk_and_benefits_image_data;
}

export interface risk_and_benefits_image_data {
  attributes: {
    url: string;
  };
}

//-------------------------------- Informative section of the home page data

export interface home_info_section {
  Information_Short_Title: string;
  Information_Full_Title: string;
  Information_Caution_Text: string;
  Information_Answer: string;
  Information_Description: string;
  Information_Stat_Number: string;
  Information_Additional_Info: string;
}

//--------------------------------- Decision Aid Section Types

export interface decision_aid_section {
  Section_Title: string;
  Section_Description: string;
  Button_Text: string;
  Section_Image: image_data;
}
//--------------------------------- MyChoices page
export interface mychoices_page_title_subtitles {
  data: {
    id: number;
    attributes: {
      pageTitle: string;
      subTitle1: string;
      subTitle2: string;
      subTitle3: string;
    };
  };
}
export interface mychoices_page_learn_about {
  data: {
    id: number;
    attributes: {
      title: string;
      subTitle1: string;
      subTitle2: string;
      subTitle3: string;
      button1: string;
      button2: string;
      button3: string;
    };
  };
}
export interface mychoices_page_risks_accordion {
  data: {
    id: number;
    attributes: {
      title: string;
    };
  };
}
export interface mychoices_same {
  data: {
    id: number;
    attributes: {
      content1: string;
      content2: string;
      number: string;
    };
  };
}

export interface mychoices_risk_forall {
  data: {
    id: number;
    attributes: {
      title: string;
      content: {
        id: number;
        content: string;
        number: string;
        popup1: string | null;
        popup2: string | null;
      }[];
    };
  }[];
}

export interface mychoices_source_data {
  data: {
    id: number;
    attributes: {
      sourceNum: string;
      sourceContent: string;
      sourceLinkText: string;
    };
  }[];
}

export interface mychoices_sections {
  data: {
    id: number;
    attributes: {
      title: {
        id: number;
        title: string;
        titleNumber: string | null;
        description: string | null;
      };
      content1: {
        id: number;
        content1: string | null;
        picture1: {
          data: {
            id: number;
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  }[];
}

//--------------------------------- MyValues page. Quesions
