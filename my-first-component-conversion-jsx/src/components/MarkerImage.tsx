interface ImgOptions {
    source: string;
    alternative: string;
    width: number;
    style?:React.CSSProperties;
}

export function MarkerImage() {
    const ImgOptions :ImgOptions= { 
        source: "https://media.gettyimages.com/id/1556119299/pt/foto/empty-aisles-at-a-supermarket.jpg?s=612x612&w=gi&k=20&c=OGXjMiwHJAtcgyyuKjVIb4x2hWu4nXtpnD1axMlI3WY=",
        alternative: "Caixas com varios tomates",
        width:200,
        style:{borderRadius:10}
        
    };
    
    const{source, alternative, width, style} = ImgOptions;
    return (
      <img
            className="list-image"
            src= {source}
            alt= {alternative}
            width={`${width}px`}
            style={style}
        />
    );
}   