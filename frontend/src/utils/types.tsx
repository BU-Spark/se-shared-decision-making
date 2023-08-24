export interface home_data {
  Section: section_data
}

export interface section_data {
  data: {
    attributes: {
      Hero_Title: string
      Hero_Description: string
      Hero_Image: image_data
    }
  }
}

export interface image_data {
  data: image_attribute
}

export interface home_choice_section {
  Title: string
  Fact_Card_Content: home_choice_card[]
  // data: {
  //   attributes: {

  //   };
  // };
}

export interface home_choice_attributes {
  attributes: {
    Title: String
  }
  Home_Choice_Card: home_choice_card[]
}

export interface home_choice_card {
  card_title: string
  card_subtext: string
  card_link: string
  fact_point: home_choice_card_fact[]
}

export interface home_choice_card_fact {
  fact_body: string
  fact_icon: image_data
}

export interface image_attribute {
  attributes: image_url
}

export interface image_url {
  url: string
}

// Below are the types for main article pages

export interface article {
  article_title: string
  feature_image: image_data
  locale: string
  Article_Section: Article_Section[]
}

export interface Article_Section {
  article_section_title: string
  article_dropdown_section_data: article_section_data
}

export interface article_section_data {
  data: article_section_data_attributes[]
}

export interface article_section_data_attributes {
  attributes: article_section_data_attributes_dropdown
}

export interface article_section_data_attributes_dropdown {
  dropdown_section_title: string
  dropdown_section_description: string
  article_section_image: image_data
  risk_and_benefits: risk_and_benefits[]
}

export interface risk_and_benefits {
  risk_and_benefits_text: string
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
  Information_Short_Title: string
  Information_Full_Title: string
  Information_Caution_Text: string
  Information_Answer: string
  Information_Description: string
  Information_Stat_Number: string
  Information_Additional_Info: string
}

//--------------------------------- Decision Aid Section Types

export interface decision_aid_section {
  Section_Title: string
  Section_Description: string
  Button_Text: string
  Section_Image: image_data
}
//--------------------------------- MyChoices page
export interface mychoices_page_title_subtitles {
  data: {
    id: number
    attributes: {
      pageTitle: string
      subTitle1: string
      subTitle2: string
      subTitle3: string
    }
  }
}
export interface mychoices_page_learn_about {
  data: {
    id: number
    attributes: {
      title: string
      subTitle1: string
      subTitle2: string
      subTitle3: string
      button1: string
      button2: string
      button3: string
    }
  }
}
export interface mychoices_page_risks_accordion {
  data: {
    id: number
    attributes: {
      title: string
    }
  }
}
export interface mychoices_same {
  data: {
    id: number
    attributes: {
      content1: string
      content2: string
      number: string
    }
  }
}

export interface mychoices_risk_forall {
  data: {
    id: number
    attributes: {
      title: string
      content: {
        id: number
        content: string
        number: string
        popup1: string | null
        popup2: string | null
      }[]
    }
  }[]
}

export interface mychoices_source_data {
  data: {
    id: number
    attributes: {
      sourceNum: string
      sourceContent: string
      sourceLinkText: string
    }
  }[]
}

export interface mychoices_sections {
  data: {
    id: number
    attributes: {
      title: {
        id: number
        title: string
        titleNumber: string | null
        description: string | null
      }
      content1: {
        id: number
        content1: string | null
        picture1: {
          data: {
            id: number
            attributes: {
              url: string
            }
          }
        }
      }[]
      content2: {
        id: number
        content1: string | null
        picture1: {
          data: {
            id: number
            attributes: {
              url: string
            }
          }
        }
      }[]
      content3: {
        id: number
        content1: string | null
        picture1: {
          data: {
            id: number
            attributes: {
              url: string
            }
          }
        }
      }[]
    }
  }[]
}

export interface mychoices_needhelp {
  data: {
    id: number
    attributes: {
      title: string
      content: string
      buttonContent: string
      helpImage: {
        data: {
          id: number
          attributes: {
            url: string
          }
        }
      }
    }
  }
}

//--------------------------------- Details page
export interface details_authors {
  data: {
    id: number
    attributes: {
      authors1: {
        id: number
        name: string | null
        Description: string | null
      }[]
      authors2: {
        id: number
        name: string | null
        Description: string | null
      }[]
      authors3: {
        id: number
        name: string | null
        Description: string | null
      }[]
      authors4: {
        id: number
        name: string | null
        Description: string | null
      }[]
    }
  }[]
}

export interface details_buttonset {
  data: {
    id: number
    attributes: {
      buttonset1: {
        id: number
        button1: string | null
        button2: string | null
        button3: string | null
      }[]
      buttonset2: {
        id: number
        button1: string | null
        button2: string | null
        button3: string | null
      }[]
    }
  }[]
}

export interface details_content {
  data: {
    id: number
    attributes: {
      content1: {
        id: number
        title: string | null
        Description: string | null
        link: string | null
      }[]
      content2: {
        id: number
        title: string | null
        Description: string | null
        link: string | null
      }[]
      content3: {
        id: number
        title: string | null
        Description: string | null
        link: string | null
      }[]
    }
  }[]
}

export interface details_picture {
  data: {
    attributes: {
      image1: image_data
      image2: image_data
    }
  }
}

export interface details_potential_risk {
  data: {
    id: number
    attributes: {
      risk1: {
        id: number
        title: string | null
        titlenumber: string | null
        content: string | null
        image: {
          data: {
            id: number
            attributes: {
              url: string
            }
          }
        }
      }[]
      risk2: {
        id: number
        title: string | null
        titlenumber: string | null
        content: string | null
        image: {
          data: {
            id: number
            attributes: {
              url: string
            }
          }
        }
      }[]
      risk3: {
        id: number
        title: string | null
        titlenumber: string | null
        content: string | null
        image: {
          data: {
            id: number
            attributes: {
              url: string
            }
          }
        }
      }[]
    }
  }[]
}
export interface details_section {
  data: {
    id: number
    attributes: {
      Details_Section_Data1: {
        id: number
        Title: string | null
        Content: string | null
        Link: string | null
        textbeforelink: string | null
      }[]
      Details_Section_Data2: {
        id: number
        Title: string | null
        Content: string | null
        Link: string | null
        textbeforelink: string | null
      }[]
      Details_Section_Data3: {
        id: number
        Title: string | null
        Content: string | null
        Link: string | null
        textbeforelink: string | null
      }[]
    }
  }[]
}
export interface details_subtitle {
  data: {
    id: number
    attributes: {
      subtitle1: string
      subtitle2: string
    }
  }[]
}
export interface source {
  data: {
    id: number
    attributes: {
      source1: {
        id: number
        content: string | null
        link: string | null
      }[]
      source2: {
        id: number
        content: string | null
        link: string | null
      }[]
      source3: {
        id: number
        content: string | null
        link: string | null
      }[]
    }
  }[]
}

export interface details_grids {
  data: {
    id: number
    attributes: {
      Details_Grids1: {
        id: number
        Title: string | null
        TitleNumber: string | null
        Description: string | null
        range: string | null
        unit: string | null
      }[]
      Details_Grids2: {
        id: number
        Title: string | null
        TitleNumber: string | null
        Description: string | null
        range: string | null
        unit: string | null
      }[]
      Details_Grids3: {
        id: number
        Title: string | null
        TitleNumber: string | null
        Description: string | null
        range: string | null
        unit: string | null
      }[]
      Details_Grids4: {
        id: number
        Title: string | null
        TitleNumber: string | null
        Description: string | null
        range: string | null
        unit: string | null
      }[]
    }
  }[]
}

export interface details_risk_content {
  data: {
    id: number
    attributes: {
      title: string
      content1: string
      content2: string
      content3: string
      content4: string
    }
  }
}
export interface details_takenotes {
  data: {
    id: number
    attributes: {
      title: string
      content: string
      link: string
      question: string
    }
  }
}

export interface details_topic {
  data: {
    id: number
    attributes: {
      title: string
      text1: string
      text2: string
      text3: string
    }
  }
}

export interface details_waiting {
  data: {
    id: number
    attributes: {
      title1: string
      title2: string
      title3: string
      title4: string
    }
  }
}

//--------------------------------- MyValues page. Quesions
