export interface Agent {
    agentId: string,
    fullName: string,
    email: string
}

export interface Call {
    callId: string,
    callTypeId: string,
    agent: {
        agentId: string,
        channelNo: number
    },
    customer: {
        fullName: string,
        channelNo: number
    },
    callStartTime: Date,
    gsFileUrl: string,
    duration: number
}


export interface ScriptSentence {
    order: number,
    similarity: number,
    sentence: string,
    matchingSentence: string
}

export interface TranscriptSentence extends ScriptSentence {
    channel: number,
    timeFrom: number,
    timeTo: number
}

export interface CallDetails extends Call {
    script: ScriptSentence[],
    transcript: TranscriptSentence[]
}
