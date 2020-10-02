import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent, Call, CallDetails } from '../interfaces';
import { AGENTS, CALL_DETAILS, CALLS } from './data'

@Injectable({
    providedIn: 'root'
})
export class CallsService {

    getAllAgents(): Observable<Agent[]> {
        return new Observable(subscriber => {
            subscriber.next(AGENTS)
        })
    }

    getAgentById(agentId: string): Observable<Agent> {
      return new Observable<Agent>(subscriber => {
        subscriber.next(AGENTS.find(x => x.agentId === agentId))
      })
    }

    getCallsByAgentId(agentId: string): Observable<Call[]> {
        return new Observable(subscriber => {
            const agentCalls = (CALLS
                .map(c => ({
                    ...c,
                    callStartTime: new Date(c.callStartTime)
                })) as Call[])
                .filter(x => x.agent.agentId === agentId)
                .sort((a, b) => +b.callStartTime - +a.callStartTime)

            subscriber.next(agentCalls)
        })
    }

    getCallDetailsById(callId: string): Observable<CallDetails> {
        return new Observable(subscriber => {
            const callDetails = (CALL_DETAILS
                .map(x => ({
                    ...x,
                    callStartTime: new Date(x.callStartTime)
                })) as CallDetails[])
                .find(cd => cd.callId === callId)

            subscriber.next(callDetails)
        })
    }

    getAgentAndCallByCallId(callId: string): Observable<any> {
      return new Observable<any>(subscriber => {
        const call = CALLS.find(x => x.callId === callId)
        const agent = AGENTS.find(x => x.agentId === call.agent.agentId)

        subscriber.next({
          call,
          agent
        })
      })
    }
}
