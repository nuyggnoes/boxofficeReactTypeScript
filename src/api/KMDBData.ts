export interface KMDBActor {
    actorNm: string;
}

export interface KMDBDirector {
    directorNm: string;
}

export interface KMDBPlot {
    plotText: string;
}

export interface KMDBResult {
    DOCID: string;
    titleEng: string;
    posters: string;
    stlls: string;
    genre: string;
    nation: string;
    rating: string;
    runtime: string;
    actors: {
        actor: KMDBActor[];
    };
    directors: {
        director: KMDBDirector[];
    };
    plots: {
        plot: KMDBPlot[];
    };
}

export interface KMDBData {
    Data: {
        Result: KMDBResult[];
    }[];
}