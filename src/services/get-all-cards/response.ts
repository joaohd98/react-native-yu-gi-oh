import {Animated, Image} from "react-native";
import {ServiceStatus} from "../model";
import * as https from "https";
import {HelperText} from "../../helpers/text";
import index from "@react-native-community/masked-view";

export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
}

export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

export class AllCardsResponse {
  id!: number;
  name!: string;
  type!: string;
  desc!: string;
  atk!: number;
  def!: number;
  level!: number;
  race!: string;
  archetype!: string;
  attribute!: string;
  card_sets!: CardSet[];
  card_images!: CardImage[];
  card_prices!: CardPrice[];

  constructor(init: Partial<AllCardsResponse>) {
    Object.assign(this, init);
  }

  static isLoadingCards = (
    status: ServiceStatus,
    successCards: AllCardsResponse[]
  ): AllCardsResponse[] => {
    if (status === ServiceStatus.loading) {
      return [0, 1, 2, 3, 4, 5].map(item => new AllCardsResponse({id: item}));
    } else {
      return successCards;
    }
  };

  getImage = (type: "small" | "big"): string | undefined => {
    const imageType = type === "small" ? "image_url_small" : "image_url";
    return this.card_images ? this.card_images[0][imageType] : undefined;
  };

  getTypeImage = (): string | undefined => {
    if (!this.type) return undefined;

    return `https://ygoprodeck.com/pics/icons/${this.type}.jpg`;
  };

  getAttributeImage = (): string | undefined => {
    if (!this.attribute) return undefined;

    return `https://ygoprodeck.com/pics/${this.attribute}.jpg`;
  };

  getRaceImage = (): string | undefined => {
    if (!this.race) return undefined;

    return `https://ygoprodeck.com/pics/icons/race/${this.race}.png`;
  };

  getAtkDefText = (): string | undefined => {
    if (this.atk && this.def) {
      return `ATK/ ${this.atk} DEF/ ${this.def}`;
    } else {
      return undefined;
    }
  };
}
