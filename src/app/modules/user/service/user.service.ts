import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const base_url = 'http://localhost:1337/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  findAllUser() {
    const url = `${base_url}/people`;
    return this.http
      .get(url)
      .pipe(
        map((res) => ({
          ...res,
          data: (res as any).data.map((it: any) => ({
            name: it.attributes.name,
            phone: it.attributes.name,
          })),
        }))
      );
    // .pipe(map((resp: { ok: boolean; medicos: Medico[] }) => resp.medicos));
  }
}
