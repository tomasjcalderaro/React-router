export const LoginScreen = () => {
    return (
        <>
          <form>
            <div class="mb-3">
              <label htmlFor="nombre" class="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre"/>
            </div>
            <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre"/>
            </div>
            <div class="mb-3">
              <label htmlFor="tecnologia" class="form-label">Tecnologia</label>
              <input type="text" className="form-control" id="tecnologia"/>
            </div>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">Email</label>
              <input type="text" className="form-control" id="email"/>
            </div>
            <div class="mb-3">
              <label htmlFor="redes" class="form-label">Redes</label>
              <input type="text" className="form-control" id="redes"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </>
    )
}

