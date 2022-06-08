export default class NFT {
    Id?: string;
    Name: string;
    Image: string;
    Description: string;

    constructor(id: string, name: string, image: string, description: string) {
        this.Id = id;
        this.Name = name;
        this.Image = image;
        this.Description = description;
    } 
}